import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store/auth";
import { useAuth } from "@/api/hooks/auth";

const signInSchema = z.object({
  username: z.string().email(),
  password: z.string().min(1),
});

export const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<{
    username: string;
    password: string;
  }>({ mode: "onTouched", resolver: zodResolver(signInSchema) });
  const setTokens = useAuthStore(state => state.setTokens);
  const { mutateAsync, data, isLoading } = useAuth();

  const onSubmit = handleSubmit(data => mutateAsync(data));

  useEffect(() => {
    if (data) setTokens(data);
  }, [data, setTokens]);

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <input type="text" {...register("username")} />
        {errors.username && <span>이메일 주소를 입력해 주세요</span>}
        <input type="password" {...register("password")} />
        {errors.password && <span>비밀번호를 입력해 주세요</span>}
        <input type="submit" value="로그인" disabled={!isValid} />
        {isLoading && <span>로딩중...</span>}
        {isSubmitting && <span>제출중...</span>}
      </form>
    </main>
  );
};
