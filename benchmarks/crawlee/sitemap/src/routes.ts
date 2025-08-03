import { createCheerioRouter } from 'crawlee';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ request, $, log, pushData }) => {
    const secret1 = $("#flat_id_123").text()
    const secret2 = $(".interesting").text()
    const secret3 = $("#nested_id_51").text()
    log.info(`${secret1} ${secret2} ${secret3}`, { url: request.loadedUrl });

    await pushData({
        url: request.loadedUrl,
        secret1: secret1,
        secret2: secret2,
        secret3: secret3,
    });
});
