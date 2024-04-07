import { useRouter } from "next/router";

export default function usePageNumber() {
	const router = useRouter();
	const { page } = router.query;

	const pageNumber = parseInt(page as string, 10) || 1;

	const handlePageChange = (newPage: number) => {
		if (newPage > 0) {
			router.push(`/?page=${newPage}`);
		}
	};

	return { pageNumber, handlePageChange }
}
