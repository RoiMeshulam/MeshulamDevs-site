"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact({ t }: { t: any }) {
  const actionUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!actionUrl) return;

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(actionUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-3 text-sm text-neutral-500">
          {t.contact.desc}
        </p>
      </div>

      <Card className="mx-auto mt-10 max-w-2xl rounded-2xl border-neutral-200">
        <CardContent className="p-6 sm:p-10">
          {!actionUrl ? (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-500">
              Missing <code>NEXT_PUBLIC_FORMSPREE_URL</code>.
              Add it to <code>.env.local</code>.
            </div>
          ) : status === "success" ? (
            <div className="text-sm text-emerald-600">
              {t.contact.success}
            </div>
          ) : status === "error" ? (
            <div className="text-sm text-red-600">
              {t.contact.error}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <input
                type="hidden"
                name="_subject"
                value="New message from roimeshulam.dev"
              />

              <div className="grid gap-2">
                <Label htmlFor="name">{t.contact.name}</Label>
                <Input id="name" name="name" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">{t.contact.email}</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">{t.contact.phone}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>

              <p className="text-xs text-neutral-400">
                {t.contact.note}
              </p>

              <Button
                type="submit"
                size="lg"
                className="rounded-lg bg-neutral-900 text-white hover:bg-blue-600"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? t.contact.sending
                  : t.contact.send}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
