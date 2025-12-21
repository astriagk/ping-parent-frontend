export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str: string, length: number): string => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
};

export const getErrorMessage = (error: unknown, fallback: string): string => {
  if (!error || typeof error !== "object") {
    return fallback;
  }

  // Check for error.response.data.message
  if (
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response &&
    error.response.data &&
    typeof error.response.data === "object"
  ) {
    const data = error.response.data as Record<string, unknown>;

    // Check for message field
    if ("message" in data && typeof data.message === "string") {
      return data.message;
    }

    // Check for error field
    if ("error" in data && typeof data.error === "string") {
      return data.error;
    }
  }

  // Check for error.response.message
  if (
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "message" in error.response &&
    typeof error.response.message === "string"
  ) {
    return error.response.message;
  }

  // Check for error.message
  if ("message" in error && typeof error.message === "string") {
    return error.message;
  }

  return fallback;
};
