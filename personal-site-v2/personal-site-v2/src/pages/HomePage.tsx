import Hero from "../components/home/Hero";
import FeaturedProject from "../components/home/FeaturedProject";
import AboutPreview from "../components/home/AboutPreview";
import FeaturedWork from "../components/home/FeaturedWork";

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedProject />
            <AboutPreview />
            <FeaturedWork />
        </>
    );
}