import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  type: string;
  uploadTime: string;
}

const FileUploadDemo = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const mockFiles = [
    { name: "презентация.pptx", type: "presentation", size: "2.4 MB" },
    { name: "логотип.png", type: "image", size: "156 KB" },
    { name: "бриф.pdf", type: "document", size: "890 KB" },
    { name: "макет.psd", type: "design", size: "12.3 MB" },
  ];

  const simulateUpload = () => {
    const randomFile = mockFiles[Math.floor(Math.random() * mockFiles.length)];
    const newFile: UploadedFile = {
      id: files.length + 1,
      name: randomFile.name,
      size: randomFile.size,
      type: randomFile.type,
      uploadTime: new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setFiles([...files, newFile]);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return "Image";
      case "document":
        return "FileText";
      case "presentation":
        return "Presentation";
      case "design":
        return "Palette";
      default:
        return "File";
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case "image":
        return "text-green-500";
      case "document":
        return "text-red-500";
      case "presentation":
        return "text-orange-500";
      case "design":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-magenta-500 to-pink-500 text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Upload" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Загрузка файлов</h3>
              <p className="text-sm opacity-90">
                Перетащите или выберите файлы
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragging
                  ? "border-purple-400 bg-purple-50"
                  : "border-gray-300"
              }`}
              onDragEnter={() => setIsDragging(true)}
              onDragLeave={() => setIsDragging(false)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                simulateUpload();
              }}
            >
              <Icon
                name="Upload"
                size={32}
                className="mx-auto text-gray-400 mb-2"
              />
              <p className="text-sm text-gray-600 mb-2">
                Перетащите файлы сюда
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={simulateUpload}
                className="text-xs"
              >
                Выбрать файлы
              </Button>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Загруженные файлы:</h4>
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                  >
                    <Icon
                      name={getFileIcon(file.type)}
                      size={16}
                      className={getFileColor(file.type)}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {file.size} • {file.uploadTime}
                      </p>
                    </div>
                    <Icon name="Check" size={16} className="text-green-500" />
                  </div>
                ))}
              </div>
            )}

            <div className="text-xs text-gray-500 pt-2 border-t">
              💡 Поддерживаются: PNG, JPG, PDF, DOCX, PPTX, PSD
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileUploadDemo;
