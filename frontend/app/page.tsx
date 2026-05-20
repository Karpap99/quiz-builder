"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    navigation.navigate("/quizzes");
  },[])

  return (
    <div>
      <main>
        <h1>
          Welcome to Quizzler
        </h1>
      </main>
    </div>
  );
}
