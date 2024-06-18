import { useCallback } from "react";

function useValidateMedia() {
  const validateMedia = useCallback(async (mediaObjects: string[]) => {
    const validMediaArray: string[] = [];
    const invalidMediaArray: { url: string; title?: string }[] = [];

    for (const media of mediaObjects) {
      if (typeof media === "string") {
        const isValidImage = await checkIfImage(media);
        if (isValidImage) {
          validMediaArray.push(media);
        } else {
          const pageTitle = getWebsiteName(media);
          invalidMediaArray.push({ url: media, title: pageTitle });
        }
      } else {
        validMediaArray.push(media);
      }
    }

    return { validMedia: validMediaArray, invalidMedia: invalidMediaArray };
  }, []);

  function checkIfImage(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  function getWebsiteName(url: string): string {
    try {
      const { hostname } = new URL(url);
      return hostname.replace("www.", "");
    } catch (error) {
      console.error(`Error parsing URL: ${url}`, error);
      return url;
    }
  }

  return { validateMedia, checkIfImage };
}

export { useValidateMedia };
