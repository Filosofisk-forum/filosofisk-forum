import PageLayout from "@/components/PageLayout";

const Bestyrelse = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Filosofisk Forums Bestyrelse</h2>

      <p className="text-muted-foreground">
        Information om bestyrelsens medlemmer og kontaktoplysninger vil blive tilføjet snart. Kontakt os venligst via{" "}
        <a href="/kontakt" className="text-accent hover:underline">
          kontaktsiden
        </a>{" "}
        for mere information.
      </p>
    </article>
  </PageLayout>
);

export default Bestyrelse;
