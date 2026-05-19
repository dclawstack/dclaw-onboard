import { notFound } from "next/navigation";
import { FeatureLandingPage } from "@/components/landing/FeatureLandingPage";
import featuresData from "@/data/features.json";
import type { Feature, AppData } from "@/data/types";

const data = featuresData as unknown as AppData;

export function generateStaticParams() {
  return data.features.map((f: Feature) => ({
    slug: f.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const feature = data.features.find((f: Feature) => f.slug === params.slug);
  if (!feature) return { title: "Feature Not Found" };

  return {
    title: `${feature.name} — DClaw Onboard`,
    description: feature.description,
  };
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const featureIndex = data.features.findIndex((f: Feature) => f.slug === params.slug);
  if (featureIndex === -1) notFound();

  const feature = data.features[featureIndex];
  const prevFeature = featureIndex > 0 ? data.features[featureIndex - 1] : null;
  const nextFeature = featureIndex < data.features.length - 1 ? data.features[featureIndex + 1] : null;

  return (
    <FeatureLandingPage
      feature={feature}
      prevFeature={prevFeature}
      nextFeature={nextFeature}
    />
  );
}
