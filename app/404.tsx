import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ErrorPage from "next/error";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect to home page after 404 display (example)
    setTimeout(() => {
      router.replace("/");
    }, 5000); // Redirect after 5 seconds
  }, []);

  return <ErrorPage statusCode={404} />;
};

export default Custom404;
