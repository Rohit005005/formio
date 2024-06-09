import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Create your form
        <strong className="font-extrabold text-primary sm:block"> In Seconds not Hours. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
      Streamline your data collection with Formio – Create, customize, and connect forms with ease, then watch as responses flow seamlessly into your spreadsheet, ready for action!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-800 focus:outline-none focus:ring active:bg-primary sm:w-auto"
          href="/dashboard"
        >
          Create AI Form
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-800 focus:outline-none focus:ring active:text-primary sm:w-auto"
          href="/dashboard"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero