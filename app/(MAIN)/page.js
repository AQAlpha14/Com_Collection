import CategoryCard from "@/components/Card/CategoryCard";
import ProductCard from "@/components/Card/ProductCard";
import ServiceCard from "@/components/Card/ServiceCard";
import {
  assetsDataHome1,
  assetsDataHome2,
  productCardData,
} from "@/mockData/MockData";
import AssetsSection from "@/sections/AssetsSection";
import Section from "@/sections/Section";

export default function Home() {
  return (
    <>
      <AssetsSection
        item={assetsDataHome1}
        imageUrl="/assets/images/image_42.webp"
        imageAlt="Luxury rental car"
        imageW={640}
        imageH={418}
        reverse={true}
      />
      <AssetsSection
        item={assetsDataHome1}
        imageUrl="/assets/images/image_42.webp"
        imageAlt="Luxury rental car"
        imageW={640}
        imageH={418}
        reverse={false}
      />
      <Section {...assetsDataHome1} txtAlign>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCardData.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
        </div>
      </Section>
      <Section {...assetsDataHome2} txtAlign>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCardData.map((product, index) => (
            <CategoryCard key={index} data={product} />
          ))}
        </div>
      </Section>
      <Section {...assetsDataHome2} txtAlign>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCardData.map((product, index) => (
            <ServiceCard key={index} data={product} />
          ))}
        </div>
      </Section>
      ;
    </>
  );
}
