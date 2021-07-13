import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  const { current } = req.query
  const descs = [
    '<div class="max-w-2xl"><span class="inline-block ">The student developer&nbsp;</span><span class="inline hover:underline font-bold"><br>your grandparents warned you about.</span></div>',
    '<div class="max-w-2xl"><span class="inline-block">Student developer interested in&nbsp;</span><br/><span class="inline font-bold hover:underline">everything open source</span> </div>',
    '<div class="max-w-2xl"><span class="inline-block"><span class="inline font-bold hover:underline">Self-taught</span> student developer interested in<br/> web design, networking, and systems infrastructure.</span> </div>',
    '<div class="max-w-2xl"><span class="inline-block">I consume&nbsp</span><span class="inline font-bold hover:underline">Information</span> for a living.<br/> <span class="text-xs">- nobody, 2021</span> </div>',
    '<div class="max-w-2xl"><span class="inline-block"><span class="inline font-bold hover:underline">Agile </span>student developer developing&nbsp;</span><span class="inline hover:underline font-bold">useful</span><br> projects.</div>',
  ]
  let random = Math.floor(Math.random() * descs.length)
  while (parseInt(current as string) == random) {
    random = Math.floor(Math.random() * descs.length)
  }
  res.json({ data: descs[random], index: random })
}
export default handler
