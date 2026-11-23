import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 m-5 w-full">

      <div className="md:grid grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-blue-700 font-bold text-4xl">Note Hub</h1>
          <h1 className="text-blue-500 text-2xl font-bold mt-4">Capture Your Thoughts</h1>
          <p className="text-gray-500 my-5 text-justify text-lg">A note app is a digital space for capturing ideas, tasks, and information quickly before they slip away. Modern apps go far beyond plain text by supporting checklists, reminders, handwriting, voice memos, scanned documents, and cloud syncing across devices. Whether used for daily grocery lists, meeting summaries, or structured research, a good note app keeps your thoughts organized and accessible whenever you need them.</p>
          <Link href={'/login'} className="bg-blue-700 text-white p-2 rounded">LET'S START</Link>

        </div>
        <div>
          <Image height={400} width={500} alt="" src={'https://cdn-icons-gif.flaticon.com/16678/16678003.gif'}/>
        </div>

      </div>


    </div>
  );
}
