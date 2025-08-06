/**
 * Custom hook for WebSocket connection to Gemma AI
 */

import { useRef, useState, useEffect, useCallback } from 'react';
import { WebSocketState } from '../types/camera';
import { GemmaWebSocket } from '../services/gemmaWebSocket';

interface UseWebSocketConnectionProps {
  isStreaming: boolean;
  topic: string;
  onTranscription: (text: string, date: Date, isHuman: boolean) => void;
}

export const useWebSocketConnection = ({
  isStreaming,
  topic,
  onTranscription
}: UseWebSocketConnectionProps): WebSocketState & { sendAudioData: (pcmArray: Uint8Array) => void; sendImageData: (imageData: string) => void } => {
  const [status, setStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [isReady, setIsReady] = useState(false);
  const [isModelSpeaking, setIsModelSpeaking] = useState(false);
  const [outputLevel, setOutputLevel] = useState(0);

  const gemmaWsRef = useRef<GemmaWebSocket | null>(null);

  /**
   * Cleanup function for WebSocket connection
   */
  const cleanupWebSocket = useCallback(() => {
    if (gemmaWsRef.current) {
      gemmaWsRef.current.disconnect();
      gemmaWsRef.current = null;
    }
  }, []);

  /**
   * Send audio data to WebSocket
   */
  const sendAudioData = useCallback((pcmArray: Uint8Array) => {
    if (!gemmaWsRef.current) {
      return;
    }
    
    // Convert to base64 and send
    const b64Data = btoa(String.fromCharCode(...pcmArray));
    
    try {
      gemmaWsRef.current.sendMediaChunk(b64Data, "audio/pcm");
      console.log("[WebSocket] Sent audio chunk:", pcmArray.length, "bytes");
    } catch (error) {
      console.error("[WebSocket] Error sending audio chunk:", error);
    }
  }, []);

  /**
   * Send image data to WebSocket
   */
  const sendImageData = useCallback((imageData: string) => {
    if (!gemmaWsRef.current) return;
    
    gemmaWsRef.current.sendMediaChunk(imageData, "image/jpeg");
  }, []);

  /**
   * Initialize WebSocket connection to Gemma
   */
  useEffect(() => {
    if (!isStreaming) {
      setStatus('disconnected');
      setIsReady(false);
      return;
    }

    setStatus('connecting');
    gemmaWsRef.current = new GemmaWebSocket(
      (text) => {
        console.log("Received from Gemma:", text);
      },
      () => {
        console.log("[WebSocket] Setup complete, starting media capture");
        setIsReady(true);
        setStatus('connected');
      },
      (isPlaying) => {
        console.log("[WebSocket] Model speaking state changed:", isPlaying);
        setIsModelSpeaking(isPlaying);
      },
      (level) => {
        setOutputLevel(level);
      },
      onTranscription,
      topic as "Displacement and Velocity" | "Soccer" | "Acceleration" | "Newton's Laws of Motion" | "Freefall and Projectile Motion" | "Circular Motion" | undefined
    );
    gemmaWsRef.current.connect();

    return () => {
      // Only cleanup if we're actually streaming
      if (isStreaming) {
        cleanupWebSocket();
        setIsReady(false);
        setStatus('disconnected');
      }
    };
  }, [isStreaming, onTranscription, cleanupWebSocket, topic]);

  return {
    status,
    isReady,
    isModelSpeaking,
    outputLevel,
    sendAudioData,
    sendImageData
  };
}; 