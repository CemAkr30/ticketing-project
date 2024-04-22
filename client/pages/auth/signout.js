import { useEffect } from "react";
import useRequest from "../../hooks/use-request";
import { useRouter } from "next/router"; // Doğru Router kancasını almak için

export default () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      doRequest();
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <div>Signing you out...</div>
    </>
  );
};
