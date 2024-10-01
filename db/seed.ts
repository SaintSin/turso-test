import { db, posts, authors } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db.insert(authors).values([
    { id: 1, name: "SEArthur" },
    { id: 2, name: "SEDent" },
    { id: 3, name: "SESmith" },
    { id: 4, name: "SESmith" },
    { id: 5, name: "SEJones" },
  ]);

  await db.insert(posts).values([
    { id: 1, title: "SeBognor", id_author: 1 },
    { id: 2, title: "SeRegis", id_author: 2 },
    { id: 3, title: "SeLochee", id_author: 1 },
    { id: 4, title: "SeCarnoustie", id_author: 1 },
    { id: 5, title: "SeLochee", id_author: 2 },
    { id: 6, title: "SeCarnoustie", id_author: 2 },
    { id: 7, title: "SeLochee", id_author: 2 },
    { id: 8, title: "SeCarnoustie", id_author: 2 },
    { id: 9, title: "SeLochee", id_author: 1 },
    { id: 10, title: "SeCarnoustie", id_author: 1 },
  ]);
}
// TODO
