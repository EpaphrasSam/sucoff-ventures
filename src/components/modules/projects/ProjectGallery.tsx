"use client";

import * as React from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Modal, ModalContent, Button } from "@heroui/react";

type ProjectGalleryProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
};

export default function ProjectGallery({
  isOpen,
  onClose,
  images,
  title,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToImage = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  if (images.length === 0) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      hideCloseButton
      classNames={{
        base: "bg-black/70 backdrop-blur-md",
        backdrop: "bg-black/70 backdrop-blur-md",
      }}
    >
      <ModalContent>
        <div className="relative w-full h-full flex flex-col">
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between">
            <h2 className="text-white text-xl font-bold drop-shadow-lg">{title}</h2>
            <Button
              isIconOnly
              variant="light"
              onPress={onClose}
              className="text-white hover:bg-white/20"
            >
              <FiX className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex-1 relative flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full h-full max-w-7xl">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <Button
                  isIconOnly
                  variant="light"
                  onPress={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm"
                >
                  <FiChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  onPress={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 bg-black/30 backdrop-blur-sm"
                >
                  <FiChevronRight className="w-8 h-8" />
                </Button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {images.length > 1 && (
            <div className="p-4 bg-black/40 backdrop-blur-md border-t border-white/20">
              <div className="max-w-7xl mx-auto flex gap-2 justify-center overflow-x-auto pb-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      currentIndex === index
                        ? "border-primary scale-110"
                        : "border-white/30 hover:border-white/60"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );
}

