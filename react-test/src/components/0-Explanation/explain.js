// explain the difference between getBy, findBy, queryBy:
// برای حالتی استفاده می‌شود که مطمئنیم المنت باید وجود داشته باشد.
const element = screen.getByText("Hello");

const element = await screen.findByText("Loading complete");
//async مثلا با fetch

const element = screen.queryByText("Error message");
//وجود نداشتن المنت را چک می‌کند بدون خطا
