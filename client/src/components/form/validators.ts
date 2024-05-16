export function fullNameValidator(value: string): string | boolean {
  if (value.length < 3) return 'Name must be at least 3 characters long';
  if (value.length > 20) return 'Name must be less than 20 characters long';
  if (!/^[a-zA-Z ]+$/.test(value)) return 'Name must contain only English letters and spaces';
  return false;
}

export function emailValidator(value: string): string | boolean {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value)) return 'Invalid email address';
  return false;
}
