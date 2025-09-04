export default function getSlug(name) {
    return name.replace(/ /g, "_").replace(/\./, "").toLowerCase()
}