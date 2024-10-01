import { defineDb, defineTable, column } from "astro:db";

const posts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    id_author: column.number({ references: () => authors.columns.id }),
    title: column.text(),
  },
});
const authors = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});
// https://astro.build/db/config
export default defineDb({
  tables: { posts, authors },
});
