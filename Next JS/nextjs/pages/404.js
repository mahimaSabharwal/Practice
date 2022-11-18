import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <h1>Page not found</h1>;
};

export default NotFound;
