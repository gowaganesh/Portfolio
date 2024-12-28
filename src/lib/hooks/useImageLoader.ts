import { useEffect, useState } from "react";

type UseImageLoader = (loadImage: () => Promise<string | null>) => string | null;

const useImageLoader: UseImageLoader = (loadImage) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await loadImage();
      setImageUrl(url);
    };

    fetchImage();
  }, [loadImage]);

  return imageUrl;
};

export default useImageLoader;
