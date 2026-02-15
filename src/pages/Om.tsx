import PageLayout from "@/components/PageLayout";

const Om = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Om Filosofisk Forum</h2>

      <p className="mb-4">Filosofisk forum er for dig med filosofisk interesse.</p>

      <p className="mb-4">Vi afholder foredrag med fri entré.</p>

      <p className="mb-4">
        Filosofisk Forum er en frivillig sammenslutning af forskere, studerende og undervisere.{" "}
        <strong>Vi afholder en foredragsrække hvert forår og efterår.</strong> Vores formål er at skabe debat om filosofi, pædagogik, jura, teologi og politik i nutiden.
      </p>

      <p className="mb-4">
        Hver sommer arrangerer vi et højskoleophold på{" "}
        <a
          href="http://grundtvigs.dk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Grundtvigs Højskole.
        </a>
      </p>

      <p className="text-sm text-muted-foreground">CVR-nummer: 41596848</p>
    </article>
  </PageLayout>
);

export default Om;
