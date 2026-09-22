// GoogleSuccess.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Guest/useAuth";
import toast from "react-hot-toast";

export default function GoogleSuccess() {
  const navigate = useNavigate();
  const { refetch } = useAuth();

  useEffect(() => {
    async function fetchUserAndNavigate() {
      try {
        await refetch(); // ambil user dan setUser di state global
        toast.success("Login Google berhasil!");
        navigate("/"); // pindah ke halaman utama/dashboard
      } catch (error) {
        toast.error("Login Google gagal");
        navigate("/login"); // kembali ke halaman login jika gagal
      }
    }
    fetchUserAndNavigate();
  }, [refetch, navigate]);

  return <p>Processing Google login...</p>;
}
