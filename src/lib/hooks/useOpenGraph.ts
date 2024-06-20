import { useCallback } from "react";
import axios from "axios";
import { OpenGraphParent } from "@/types/internal/opengraph";
import { APP_URL } from "../constants";
import { fetchApiData } from "../fetch/api";
function useOpenGraph() {
  /**
   * Fetches OpenGraph data for the provided URL.
   *
   * @param {string} url - The URL to fetch OpenGraph data from.
   * @returns {Promise<OpenGraphParent>} The OpenGraph data.
   */
  const getOpenGraph = useCallback(
    async (url: string): Promise<OpenGraphParent> => {
      const encodedUrl = encodeURIComponent(url);
      try {
        const data = await fetchApiData("opengraph", {
          url: encodedUrl,
        });

        return data;
      } catch (error) {
        console.error(`Error fetching OpenGraph data: ${error}`);
        throw error;
      }
    },
    []
  );

  return {
    getOpenGraph,
  };
}

export { useOpenGraph };
