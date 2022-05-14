export function toKebabCase(string) {
    return string.toLowerCase().split(' ').join('-')
}
