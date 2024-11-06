import { useEffect, useState } from "react";

export interface Hero {
    id: number;
    title: string;
    bannerImage: {
        formats: {
            large: {
                url: string;
            };
        };
    }[];
}

export const useBannerHero = () => {
    const [loading, setLoading] = useState(true);
    const [hero, setHero] = useState<Hero[]>([]); // Pastikan ini adalah array kosong

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/banner-heroes?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    },
                });
                const data = await res.json();
                console.log(data); // Tambahkan log untuk memeriksa data yang diterima
                setHero(data.data || []); // Menggunakan array kosong jika data tidak ada
            } catch (error) {
                console.error("Error fetching properties:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { hero, loading };
};
