import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { zod } from "sveltekit-superforms/adapters";
import { z } from "zod";
import type { PageServerLoad } from "./$types";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(formSchema));
  return { form };
};

export const actions = {
  default: async ({ request }: { request: Request }) => {
    const form = await superValidate(request, zod(formSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      return {
        form,
        success: true,
      };
    } catch (error) {
      return fail(500, {
        form,
        error:
          "Sistemlerimiz şu anda meşgul. Lütfen daha sonra tekrar deneyin ya da bizimle iletişime geçin.",
      });
    }
  },
};
