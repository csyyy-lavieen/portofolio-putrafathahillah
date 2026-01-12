export default function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Andi Putra Fathahillah',
        url: 'https://putrafathahillahporto.vercel.app',
        jobTitle: 'Web Developer & UI/UX Designer',
        knowsAbout: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma'],
        sameAs: [
            'https://github.com/andiputraf', // Contoh, bisa disesuaikan nanti
            'https://linkedin.com/in/andiputraf' // Contoh
        ]
    }
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
