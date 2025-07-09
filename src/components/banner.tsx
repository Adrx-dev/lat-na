import React from "react";

export default function Banner() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-5 text-center">
      <img src="/bini.png" alt="Lakambini Logo" className="h-[170px] w-auto" />
      <h3 className="font-semibold"></h3>
      <h2 className="text-5xl font-bold tracking-wide">
        Grade XI <br /> Lakambini Archives
      </h2>
      <p className="tracking-wide max-w-xl">
        A platform for Grade XI Lakambini students to share academic insights, experiences, and stories that inspire our community.
      </p>
    </div>
  );
}
