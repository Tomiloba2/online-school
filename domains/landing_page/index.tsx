import Header from './components/Header';
import Hero from './components/Hero';
import InstitutionalCore from './components/InstitutionalCore';
import ParentChildLayer from './components/ParentChild';
import SubscriptionPlans from './components/SubscriptionPlan';
import Footer from './components/Footer';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';

export interface ILandingPageProps {
}

export default function LandingPage(props: ILandingPageProps) {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <InstitutionalCore />
                <ParentChildLayer />
                <SubscriptionPlans />
                <FAQ />
                <FinalCTA />
                <Footer />
            </main>
        </div>
    );
}
