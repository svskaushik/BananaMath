"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache"

export default async function addAttempt(correct_count: number, total_count: number) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //console.log("User:", user?.id);

  if (!user) {
    return redirect("/login");
  }

  const { data, error } = await supabase
  .from('entries')
  .insert([
    { correct_count: correct_count, total_count: total_count, user_id: user?.id},
  ])
  .select()

    if (error){
    console.error('Error inserting data', error)
    return;
    }

    revalidatePath('/leaderboard')

    return {message: 'Success'}
    }
