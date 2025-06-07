
import React, { useRef, useEffect, useState } from 'react';
import { Camera, Check, X, RotateCcw, UserCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface FaceAttendanceProps {
  onAttendanceMarked: (success: boolean) => void;
  onClose: () => void;
}

const FaceAttendance: React.FC<FaceAttendanceProps> = ({ onAttendanceMarked, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: 640, 
          height: 480,
          facingMode: 'user'
        } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (error) {
      console.error('Lỗi khi truy cập camera:', error);
      toast({
        title: "Lỗi",
        description: "Không thể truy cập camera. Vui lòng kiểm tra quyền truy cập.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (context) {
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(imageData);
        stopCamera();
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    setVerificationStatus('idle');
    startCamera();
  };

  const processAttendance = async () => {
    if (!capturedImage) return;
    
    setIsLoading(true);
    setVerificationStatus('processing');
    
    try {
      // Mô phỏng quá trình nhận diện khuôn mặt
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mô phỏng kết quả ngẫu nhiên (trong thực tế sẽ gọi API nhận diện)
      const isVerified = Math.random() > 0.3; // 70% thành công
      
      if (isVerified) {
        setVerificationStatus('success');
        toast({
          title: "Thành công",
          description: "Điểm danh khuôn mặt thành công!",
        });
        onAttendanceMarked(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setVerificationStatus('failed');
        toast({
          title: "Thất bại",
          description: "Không nhận diện được khuôn mặt. Vui lòng thử lại.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Lỗi xử lý điểm danh:', error);
      setVerificationStatus('failed');
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi xử lý điểm danh.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Điểm danh khuôn mặt</h2>
          <p className="text-gray-600">Đảm bảo khuôn mặt của bạn hiện rõ trong khung hình</p>
        </div>

        <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
          {!capturedImage ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              {cameraActive && (
                <div className="absolute inset-0 border-4 border-green-500 rounded-lg pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-48 h-32 border-2 border-green-400 rounded-lg"></div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="relative">
              <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
              {verificationStatus === 'success' && (
                <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
                  <Check className="h-16 w-16 text-green-600" />
                </div>
              )}
              {verificationStatus === 'failed' && (
                <div className="absolute inset-0 bg-red-500 bg-opacity-20 flex items-center justify-center">
                  <X className="h-16 w-16 text-red-600" />
                </div>
              )}
              {verificationStatus === 'processing' && (
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />

        <div className="flex gap-3">
          {!capturedImage ? (
            <>
              <Button
                onClick={capturePhoto}
                disabled={!cameraActive}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <Camera className="h-4 w-4 mr-2" />
                Chụp ảnh
              </Button>
              <Button variant="outline" onClick={onClose} className="flex-1">
                Hủy
              </Button>
            </>
          ) : (
            <>
              {verificationStatus === 'idle' && (
                <>
                  <Button
                    onClick={processAttendance}
                    disabled={isLoading}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    {isLoading ? 'Đang xử lý...' : 'Xác nhận điểm danh'}
                  </Button>
                  <Button variant="outline" onClick={retakePhoto} className="flex-1">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Chụp lại
                  </Button>
                </>
              )}
              {verificationStatus === 'failed' && (
                <>
                  <Button
                    onClick={processAttendance}
                    disabled={isLoading}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    Thử lại
                  </Button>
                  <Button variant="outline" onClick={retakePhoto} className="flex-1">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Chụp lại
                  </Button>
                </>
              )}
              {verificationStatus === 'success' && (
                <Button onClick={onClose} className="flex-1 bg-green-600 hover:bg-green-700">
                  <Check className="h-4 w-4 mr-2" />
                  Hoàn thành
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaceAttendance;
