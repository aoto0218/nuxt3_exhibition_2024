export function useAge(birthdate: string) {
    const age = computed(() => {
        const birth = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const isBeforeBirthday = today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
        if (isBeforeBirthday) {
            age--;
        }
        return age;
    });

    return { age };
}
