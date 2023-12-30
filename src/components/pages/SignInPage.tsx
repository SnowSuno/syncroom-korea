import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const { login } = useAuth();

  const onSubmit = handleSubmit(async data => {
    const success = await login(data);
    if (success) {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  });

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <input type="text" {...register("username")} />
        {errors.username && <span>이메일 주소를 입력해 주세요</span>}
        <input type="password" {...register("password")} />
        {errors.password && <span>비밀번호를 입력해 주세요</span>}
        <input type="submit" value="로그인" disabled={!isValid} />
        {isSubmitting && <span>로그인 중...</span>}
      </form>
    </main>
  );
};
