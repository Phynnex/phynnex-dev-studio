import React from 'react';

const logos = ['Astra', 'NovaLabs', 'Quanta', 'Helios', 'Nimbus'];

const TrustedBy = () => {
  return (
    <section className="py-12 lg:py-16 bg-black">
      <div className="container-custom text-center">
        <p className="text-white/60 text-sm font-inter mb-6">Trusted by forward-thinking teams</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
          {logos.map((name) => (
            <div
              key={name}
              className="h-8 px-4 rounded bg-white/5 border border-white/10 text-white/70 text-sm flex items-center"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

