import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import MonkeyMath from "@/components/BananaMath/MonkeyMath";

const TEXT_CLASS = "text-zinc-400 hover:text-zinc-200";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    // <div className="flex-1 w-full flex flex-col gap-20 items-center">
    //   <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //     <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
    //       <DeployButton />
    //       {isSupabaseConnected && <AuthButton />}
    //     </div>
    //   </nav>

    //   <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
    //     <Header />
    //     <main className="flex-1 flex flex-col gap-6">
    //       <h2 className="font-bold text-4xl mb-4">Next steps</h2>
    //       {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
    //     </main>
    //   </div>

    //   <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
    //     <p>
    //       Powered by{" "}
    //       <a
    //         href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
    //         target="_blank"
    //         className="font-bold hover:underline"
    //         rel="noreferrer"
    //       >
    //         Supabase
    //       </a>
    //     </p>
    //   </footer>
    // </div>
    <div className="flex flex-1 w-full flex-col items-center justify-between bg-zinc-800 px-10 py-6">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/40x40"
            alt="logo"
            className="size-10"
          />
          <span className="text-xl font-bold">BananaMath</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className={TEXT_CLASS}>Contact</button>
          <button className={TEXT_CLASS}>Support</button>
          <button className={TEXT_CLASS}>Settings</button>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <MonkeyMath />
      <footer className="mt-8 flex w-full items-center justify-between text-sm text-zinc-400">
        <div className="flex space-x-2">
          <button>Contact</button>
          <button>Support</button>
          <button>GitHub</button>
          <button>Twitter</button>
        </div>
        <div>
          <span>v0.0.1</span>
        </div>
      </footer>
    </div>
  );
}
