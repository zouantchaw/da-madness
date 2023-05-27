import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Welcome to da.madness! <br className="hidden sm:inline" />
          Your one-stop solution for event planning.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          We offer comprehensive DJ services, audio services, and folding chair/table rentals tailored to make your events unforgettable. Get started with us today!
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={'/'}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
