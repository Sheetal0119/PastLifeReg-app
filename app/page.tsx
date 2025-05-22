import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import GoogleTranslate from "@/components/google-translate"
import SectionHeading from "@/components/section-heading"
import FAQAccordion from "@/components/faq-accordion"
import { faqs } from "@/lib/data"

export default function PastLifeRegressionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-10 px-4 md:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">Soul&apos;s Purpose</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">because you&apos;re born for a reason!</p>
        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <ul className="flex flex-wrap py-4 text-sm md:text-base overflow-x-auto">
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/" className="text-gray-600 hover:text-orange-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/about" className="text-gray-600 hover:text-orange-700 transition-colors">
                About
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/tarot" className="text-gray-600 hover:text-orange-700 transition-colors">
                Tarot
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link
                href="/past-life-regression"
                className="text-orange-700 font-medium border-b-2 border-orange-700 pb-1"
              >
                Past Life Regression
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/hypnotherapy" className="text-gray-600 hover:text-orange-700 transition-colors">
                Hypnotherapy
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/courses" className="text-gray-600 hover:text-orange-700 transition-colors">
                Courses
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/downloads" className="text-gray-600 hover:text-orange-700 transition-colors">
                Downloads
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/elite" className="text-gray-600 hover:text-orange-700 transition-colors">
                Elite✨
              </Link>
            </li>
            <li className="mr-6 mb-2 whitespace-nowrap">
              <Link href="/contact" className="text-gray-600 hover:text-orange-700 transition-colors">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-purple-800">
            Past Life Regression Therapy
          </h1>

          <div className="mb-12">
            <GoogleTranslate />

            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2 space-y-4">
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Are you curious about knowing who you were in your Past Life?
                </p>
                <p className="text-lg md:text-xl font-medium text-gray-800">Do you wish to see your Past Life?</p>
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Do you need answers to unexplained pains, unexplained situations, unexplained people/ things/
                  experiences in life?
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/past-life-session.jpg"
                  alt="Past Life Regression Online Session"
                  width={1200}
                  height={600}
                  className="rounded-xl shadow-md object-cover h-[360px]"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
              <p className="text-lg text-center mb-6">
                Past Life therapy can help you to uncover the memories of your past life, that will give you answers,
                clues and explanations for several situations in your current life.
              </p>
              <p className="text-lg text-center">
                Yes it&apos;s not the cure for anything, but getting revealing answers, reasons and explanations can
                take off a lot of stress and complaints.
              </p>
            </div>
          </div>

          <section className="mb-16">
            <SectionHeading>What is Past Life Regression?</SectionHeading>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  Past Life Regression isn&apos;t going to some place in a different Time. Past Life is digging into
                  your Memories of Past Life. Your Subconscious mind has a small part of memory called "primitive
                  memory" where all your Past Lives are stored. You just visit those memories.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/brain-visualization.jpg"
                  alt="Brain visualization"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800 text-center">
                Before you get in a Session, you need to know what it is Exactly...
              </h3>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                <p className="text-red-600 text-lg font-medium text-center">
                  Spoiler Alert - You/ your soul, DOES NOT Time Travel during a Past Life Regression Session.
                </p>
              </div>

              <ul className="space-y-4 text-lg list-disc pl-6">
                <li>You already have your Past Life Memories inside your Sub-Conscious.</li>
                <li>
                  Part of your Sub Conscious Mind that Carries your past life memories is called "primitive Mind" which
                  has all Memories of each and every Past Life you&apos;ve lived.
                </li>
                <li>
                  You don&apos;t go anywhere during the Past Life, you&apos;re just taken Deep into Hypnosis where you
                  can Access this Primitive Memories.
                </li>
                <li>
                  These Memories can be Disturbing, so without a Therapist these memories stay hidden. So that you
                  don&apos;t accidentally dig out and get overwhelmed with them, when there&apos;s no help nearby.
                </li>
                <li>
                  Only a Trained Past Life Regressionist can help you get this deep, where you can uncover these
                  memories.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>How does this Session Happen?</SectionHeading>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  During this Session your Therapist will take you under a Deep Hypnotic State where you will be able to
                  easily access the Primitive Memory of yours. Where all your Past Lives are stored.
                </p>
                <p className="text-lg mb-6">
                  This Process is totally Safe when you&apos;re doing it under the Guidance of a Trained Past Life
                  Therapist.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/meditation-session.jpg"
                  alt="Person in meditation"
                  width={640}
                  height={400}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  You CANNOT do anything wrong during this session. Because this is just a Hypnotic Session and not a
                  Time Travel.
                </p>
                <p className="text-lg">
                  This Session can be done in-person or online via phone or video call and it works perfectly both ways
                  as the therapist&apos;s Voice should reach you!
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/past-life-journey.jpg"
                  alt="Past life journey visualization"
                  width={640}
                  height={362}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>How can a Past Life Regression Therapy Session help you?</SectionHeading>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <ul className="space-y-4 text-lg list-disc pl-6">
                  <li>It can help you to Release unwanted Emotional stress, Memories and Trauma</li>
                  <li>This Process helps you to find answers for your Present Life Situations.</li>
                  <li>
                    This will also help you to Release any unnecessary bonds or memories that are not needed in this
                    lifetime.
                  </li>
                  <li>Helps you to realise your Past Karma and be Accountable for it, rather then escaping from it.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/time-concept.jpg"
                  alt="Time concept visualization"
                  width={640}
                  height={418}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-red-600 text-lg font-medium text-center">
                  Karma is inevitable, and Past Life Therapy cannot cure that. So please be aware of it prior to
                  session.
                </p>
              </div>

              <p className="text-lg mb-6">
                Past Life Therapy can of course release the emotional trauma associated with that issue/problem to
                lessen your suffering.
              </p>

              <p className="text-lg mb-6">
                This session will be tailor-made for you. According to your wish, what you want to achieve with this
                session. We can reveal a part of your past life; check for vows, oaths or curses; see what you were in
                your past life, check reasons for your present life&apos;s problems.
              </p>

              <p className="text-lg mb-6">
                Also remember you have intend to Visit Past Life Memories with some questions or curiosity, but
                there&apos;s no Guarantee; that you&apos;ll get the answers you want during the session. You will
                experience a Past Life that you extremely need to feel according to your present life. So neither you
                nor the therapist can control what past life you visit.
              </p>

              <p className="text-base italic text-gray-600 text-center mt-8">
                Please note that you will not get solutions for any black magic issue you have or had in past. Past Life
                Regression is not the cure for Black Magic. Please consult an appropriate person for Black Magic. No
                questions or discussions regarding this topic will be entertained.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>Benefits of Past Life Session</SectionHeading>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <ul className="space-y-4 text-lg list-disc pl-6">
                  <li>
                    Helps you Realise your Karmas and Lessons. Sometimes knowing why are you Suffering, what is the
                    Reason for it. Actually Helps to release a Lot of Trauma.
                  </li>
                  <li>
                    It helps to Release Trauma or Suffering related to some significant incident that might have taken
                    place in past life which has just become stuck in your Consciousness.
                  </li>
                  <li>It can help you Find your Purpose and Messages to Improve your Present Life.</li>
                  <li>Helps you get aware about Present Life Lessons that you have brought along in this life.</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/moon-visualization.jpg"
                  alt="Moon visualization"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>What Past Life Session cannot Help with?</SectionHeading>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <ul className="space-y-4 text-lg list-disc pl-6">
                  <li>Past Life Session Cannot help with Healing Physical Body Diseases.</li>
                  <li>It cannot help with Clearing Karma</li>
                  <li>
                    It cannot Erase Karma or Curses. If you have done something, then you need to PAY for it.
                    That&apos;s how you Heal that Karmic Baggage.
                  </li>
                  <li>
                    It cannot Solve Present Life Problems Forever. You may not come out of all your Problems after a
                    Session. Which is totally Normal.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/stop-sign.jpg"
                  alt="Stop sign"
                  width={320}
                  height={320}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>How are these Sessions Available?</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src="/images/time-concept-2.jpg"
                      alt="Time concept"
                      width={640}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-800">1. Past Life Experience</h3>
                    <ul className="space-y-3 text-base mb-6 list-disc pl-6">
                      <li>Past Life Visitation Experience will be just a normal Past Life Memory visit.</li>
                      <li>Helps you to Learn the Quality of Past Life you&apos;ve Lived</li>
                      <li>Learn what Lessons, Learnings, Karma you have Brought here to Experience</li>
                      <li>
                        Helps to Learn what your Purpose is. And learn what to do and what NOT to do to keep your life
                        peaceful and happy.
                      </li>
                      <li>Gain deeper self-awareness by uncovering hidden patterns influencing your present life.</li>
                    </ul>
                    <p className="font-medium mb-2">Only One Session will be Enough for this one.</p>
                    <p className="font-bold text-lg mb-4 text-orange-700">Price Rs. 4999/- INR or $97 USD</p>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">BOOK A SESSION NOW</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src="/images/virtual-reality.jpg"
                      alt="Virtual reality concept"
                      width={640}
                      height={426}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-purple-800">2. Past Life therapy</h3>
                    <ul className="space-y-3 text-base mb-6 list-disc pl-6">
                      <li>
                        Past Life Therapy Experience is a Therapy process that is done with you, during the Past Life
                        Memory visit Session.
                      </li>
                      <li>
                        This Session will help you Release any Trauma, Memories that are not supporting for your Present
                        Lives.
                      </li>
                      <li>
                        Help Release Regrets and Negative Emotional Patterns to stop making them affect your Present
                        Life
                      </li>
                      <li>Re Build a better Mental Pattern to help you live a better Present Life.</li>
                    </ul>
                    <p className="font-medium mb-2">3 or More Sessions will be Necessary</p>
                    <p className="font-bold text-lg mb-4 text-orange-700">Price Rs. 22499/- or $397 USD</p>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">BOOK A SESSION NOW</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>How will you Experience your Past Life Memories?</SectionHeading>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-8 bg-white p-8 rounded-2xl shadow-sm">
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  You'll have Experiences that you'll be able to feel through your Physical Body, your thoughts or
                  emotions.
                </p>
                <p className="text-lg font-medium text-purple-800 mb-6">
                  Also because these are memories inside you, it can also come to you as a thought, feeling, knowing and
                  sensation.
                </p>
                <p className="text-lg font-medium text-purple-800">
                  Note - Not everybody is able to Visually SEE a Past Life Experience. But 99% of my Clients have been
                  able to successfully Sense their Past Life.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/past-life-experience.jpg"
                  alt="Past life experience visualization"
                  width={640}
                  height={500}
                  className="rounded-xl shadow-md object-cover h-[300px] w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>Terms & Conditions</SectionHeading>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-red-600">Terms & Conditions for taking this session</h3>

              <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                <li>
                  You should be Physically & Psychologically healthy. I am a hypnotherapist and not a trained
                  psychologist. So I can help only healthy people. Health and mental issues need a specially trained
                  practitioner to handle that case effectively.
                </li>
                <li>
                  This will be an online session, where you need to be in a quiet place for atleast 45-60mins of the
                  session. Earplugs are necessary to help you with this session. Session will be conducted vis Phone/
                  Skype
                </li>
                <li>
                  You should be above 18yrs to undergo a past life session. Else you need to get written permission from
                  Parents or Guardian.
                </li>
                <li>
                  All information, therapy details, sharing of personal details will be kept confidential. You will get
                  an audio recording of the session upon request. Request will be needed to be made, prior to the
                  session.
                </li>
                <li>
                  If you had Black Magic done upon you or you had voodoo or Cast Eyes related problems done upon you or
                  your family then it will be difficult for you to undergo a past life. In that case I expect you
                  Practice meditation for atleast 1 month, and then go for the Past Life Therapy session.
                </li>
                <li>
                  Remember - Past Life Regression or Hypnotherapy CANNOT heal problems brought by Black Magic, or Cast
                  Eyes or Voodoo. Also I personally don&apos;t give healing for any issues. So please be aware that
                  these issues might stay intact even after the session.
                </li>
                <li>
                  All Payments made are non-refundable, you pay for the Time and Expertise of the Therapist and not for
                  the Experience. If you fail to get Past Life Experience then a Complimentary Past Life Tarot Reading
                  will be provided to you.
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>Payment Options</SectionHeading>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  If you&apos;re from India Select this Payment button for Payment with UPI, Gpay or Net Banking
                </h3>
                <p className="text-3xl mb-6">👇🏼⬇️👇🏼</p>

                <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Book Now - ₹4999
                </Button>

                <h3 className="text-xl font-medium text-purple-800 mt-8 mb-4">Price: Rs. 4999/- or $97 USD</h3>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">If you&apos;re Non-Indian use this to make a Secure Payment</h3>

                <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Pay with PayPal - $97
                </Button>

                <p className="text-xs text-gray-600 mt-6">
                  All Payments are non-refundable. You pay for the Therapist&apos;s Time & Expertise.
                </p>

                <h3 className="text-xl font-bold text-purple-800 mt-8">
                  Contact Me on +91 6359011106 to see if a Discount is Available!
                </h3>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading>Frequently Asked Questions</SectionHeading>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-100 to-gray-50 py-8 px-4 md:px-8 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-orange-700 mb-2">Soul&apos;s Purpose</h2>
              <p className="text-gray-600">because you&apos;re born for a reason!</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/contact" className="text-gray-600 hover:text-orange-700 transition-colors">
                Contact
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-700 transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-orange-700 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>Copyright © {new Date().getFullYear()} Soul&apos;s Purpose. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
