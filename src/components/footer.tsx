import React from "react";
import Container from "./container";
import { Button } from "./button";
import { Gradient } from "./gradient";

export default function Footer() {
  return (
    <footer>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/footer-bg.jpg)" }} // <-- replace with your image path
      >
        {/* Optional: add overlay */}
        <div className="absolute inset-0 bg-white/80 z-0" />

        {/* Content */}
        <Gradient className="relative z-10">
          <Container className="relative py-16 text-center sm:py-24">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gray-500">
                Get started
              </p>
              <p className="mx-auto mt-6 text-3xl sm:text-5xl font-medium tracking-tight text-gray-950 max-w-3xl">
                React to dive in? <br />
                Start your free trial today
              </p>
              <p className="mx-auto mt-6 max-w-md text-sm sm:text-base text-gray-600">
                Get the cheat codes for selling and unlock your team&apos;s
                revenue potential.
              </p>
              <div className="mt-6">
                <Button className="w-full sm:w-auto" href="/login">
                  Get started
                </Button>
              </div>
            </div>
          </Container>
        </Gradient>
      </div>
    </footer>
  );
}
