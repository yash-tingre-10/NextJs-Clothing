import Hero from '@/components/Hero';
import Products from '@/components/Products';
import SubNav from '@/components/SubNav';

export default function Home() {
    return (
        <div className="flex flex-col gap-7">
            <section className="bg-primary text-primary-foreground">
                <Hero />
            </section>
            <section className="container grid gap-5">
                <SubNav />
                <Products />
            </section>
        </div>
    );
}
