export async function getBanners() {
  const res = await fetch(`${process.env.API_URL}/api/gym-banners?populate=*`, {
    next: { revalidate: 10 },
  });

  if (res.ok) {
    const bannersNormalized = await res.json().then((res) =>
      res.data.map((obj: any) => {
        return {
          ...obj.attributes,
          bannerImageUrl: obj.attributes.bannerImage.data.attributes.url,
        };
      })
    );

    return bannersNormalized;
  } else {
    console.error("API ERROR");
  }
}
