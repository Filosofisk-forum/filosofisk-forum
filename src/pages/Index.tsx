import PageLayout from "@/components/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      <article className="prose-custom">
        <h2 className="font-display text-3xl text-primary mb-6">Filosofisk Forum</h2>

        <p className="font-bold uppercase text-sm tracking-wide text-foreground mb-1">
          Hvor afholdes Filosofisk Forums arrangementer:
        </p>
        <p className="italic text-muted-foreground mb-6">
          Trinitatis Sognehus, Pilestræde 67, København K.
        </p>

        <p className="mb-4">
          På Sognehusets side kan du se{" "}
          <a
            href="https://www.trinitatiskirke.dk/aktiviteter/foredrag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            tidspunkterne
          </a>{" "}
          for vores foredrag.
        </p>

        <p className="mb-8">
          Vort aktuelle <strong>program</strong> kan du se og downloade{" "}
          <a href="/program" className="text-accent hover:underline font-semibold">
            her.
          </a>
        </p>

        {/* Google Map - Trinitatis Sognehus */}
        <div className="mb-8 max-w-md">
          <a
            href="https://www.google.dk/maps/place/Trinitatis+Kirke/@55.6820403,12.5744546,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded border border-border hover:border-accent transition-colors"
          >
            <iframe
              title="Trinitatis Sognehus lokation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.5!2d12.5744546!3d55.6820403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253100e58053f%3A0x61f4394fd9e4d9c0!2sTrinitatis+Kirke!5e0!3m2!1sda!2sdk!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-auto"
            />
          </a>
          <p className="text-xs text-muted-foreground mt-1">Trinitatis Sognehus, Pilestræde 67, København K</p>
        </div>


        <div className="mb-8 p-4 bg-card border border-border rounded">
          <p className="text-sm text-muted-foreground mb-2">
            Se i øvrigt i <strong>menuen</strong> for oplysninger om medlemskab og kontakt med os. Vi kan også henvise til vores{" "}
            <a
              href="https://www.facebook.com/groups/155537601124000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              gruppe på Facebook.
            </a>
          </p>
        </div>

        <p className="mb-4">
          Vi glæder os til at se dig med filosofisk interesse til foredrag.
        </p>

        <p className="mb-8">
          Tag dine venner med og få en underholdende aften. En aften i filosofisk forum giver altid stof til eftertanke som du kan tage med hjem.
        </p>

        <div className="border-t border-border pt-8">
          <h3 className="font-display text-xl text-primary mb-4">Historien bag Filosofisk Forum</h3>

          <p className="mb-4">
            Vidste du at FF oprindeligt blev stiftet af Peter Kemp og Arno Victor Nielsen i starten af 80'erne?
          </p>

          <p className="mb-4">
            Sammen dannede de to filosoffer i starten af 1980'erne FF, som et opgør mod det etablerede 'filosofiske selskab', som var mere orienteret mod den såkaldte 'analytiske' filosofi.
          </p>

          <p className="mb-4">
            Peter Kemp var orienteret mod den kontinentale franske og tyske filosofi, som var mere optaget af at engagere sig i menneskets mere konkrete eksistentielle problemer. Peter Kemp døde 4. august 2018.
          </p>

          <p className="mb-4">
            Arno Victor er dansk filosof og lektor i pædagogisk filosofi ved Danmarks Pædagogiske Universitetsskole indtil 2006.
          </p>

          <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
            Arno Victor var desuden kulturanmelder ved <em>Politiken</em>, freelancer ved DR og kommentator ved <em>Berlingske Tidende</em>. Han har også været tilknyttet <em>B.T.</em>, <em>Kristeligt Dagblad</em> og <em>Ekstra Bladet</em>, samt <em>Information</em> som klummeskribent. Han har desuden haft en omfattende aktivitet som foredragsholder og har forfattet talrige oversættelser.
          </p>

          <p>
            Begge de to filosoffer optrådte hyppigt på tv med kommentarer til forskellige emner.
          </p>
        </div>
      </article>
    </PageLayout>
  );
};

export default Index;
