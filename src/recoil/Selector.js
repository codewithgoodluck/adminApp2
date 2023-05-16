export const allUsersSelector = selector<allusersAtom[]>({
    key: 'allusers',
    get: async () => {
      const response = await fetch('http://161.35.218.95:3000/api/admin/all_users');
      return response.json();
    }
  })