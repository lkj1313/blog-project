export default class APIError extends Error {
  status: number;
  code?: string;
  raw?: unknown;

  constructor(status: number, code?: string, message?: string, raw?: unknown) {
    super(message || `HTTP ${status}`);
    this.status = status;
    this.code = code;
    this.raw = raw;
    Object.setPrototypeOf(this, APIError.prototype);
  }
}
