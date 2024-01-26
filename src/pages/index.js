import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/personal-portfolio");
  }, [router]);
  return <div></div>;
};

export default Index;
