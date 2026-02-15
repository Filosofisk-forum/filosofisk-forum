import PageLayout from "@/components/PageLayout";

const BlivMedlem = () => (
  <PageLayout>
    <article>
      <h2 className="font-display text-3xl text-primary mb-6">Bliv Medlem</h2>

      <p className="mb-4">
        Det er gratis at deltage i foredrag – men du kan vælge at blive medlem af Filosofisk Forum, hvorved du støtter foreningen økonomisk.
      </p>

      <div className="bg-card border border-border rounded p-5 mb-6">
        <p className="font-semibold mb-2">Kontingent:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Studenter, arbejdsløse og pensionister: <strong className="text-foreground">100 kr.</strong></li>
          <li>Medlemmer i arbejde: <strong className="text-foreground">200 kr.</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Giro: (+01) 113-5600
        </p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Der eksisterer lovgivning om foreninger. Stifterne og medlemmerne kan inden for lovens rammer udforme foreningsvedtægten ('foreningens love'), hvorledes alle forhold håndteres.
      </p>
    </article>
  </PageLayout>
);

export default BlivMedlem;
