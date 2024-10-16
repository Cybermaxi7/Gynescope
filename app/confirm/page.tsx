export default function Confirm() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white px-6 py-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Check Your Email
                </h1>
                <p className="text-gray-600 text-center">
                    A confirmation email has been sent to your email address.
                    Please check your inbox and click the link in the email to
                    confirm your account.
                </p>
            </div>
        </div>
    );
}
