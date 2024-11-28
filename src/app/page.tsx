import Nav from "@/components/navbar/Nav";
import React from "react";
import { Space_Grotesk } from "next/font/google";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
});

const Home = () => {
  return (
    <main className={`${grotesk.className} bg-[#2a2927]`}>
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="w-full  flex items-center py-40 px-28 ">
        <h1 className="text-8xl font-semibold uppercase">
          Enabling
          <br />a secure cyberspace
        </h1>
      </section>

      {/* section 2 */}
      <section className="flex justify-center items-center gap-4 my-10 px-28 w-full">
        <div className="mx-9 w-96">
          <h1 className="uppercase text-6xl font-semibold">
            Complex problems{" "}
            <span className="text-red-700">do not require complex</span>{" "}
            solutions
          </h1>
        </div>

        <div className="w-96 flex flex-col items-center gap-10 ">
          <div>
            <h1 className="text-2xl uppercase">Red team</h1>
            <p className="text-gray-400">
              We provide advanced pentesting service to include everything from
              exploit architecture to social engineering. Our Red Team is
              comprised of offensive cybersecurity experts and therefore we can
              better simulate real world attacks on your infrastructure, apps,
              employees, and more.
            </p>
          </div>

          <div>
            <h1 className="text-2xl uppercase">Appsec</h1>
            <p className="text-gray-400">
              Static and dynamic secure code review can prevent a 0day before
              your product is even released. We can integrate with your dev
              environment, or analyze binaries in our lab and incorporate
              pentesting techniques to help find vulnerabilities early.
            </p>
          </div>

          <div>
            <h1 className="text-2xl uppercase">Risk Management </h1>
            <p className="text-gray-400">
              From CMMC, to HIPPA, to Plug & Play compliance software, we can
              help you manage your risk tolerance and cyber strategy. Our unique
              industry experience can help you stay 100% compliant and stop
              chasing inspection cycles, regardless of size or staffing.
            </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
    </main>
  );
};

export default Home;
